//@ts-ignore

export function initialisePosthog(document: Document, posthogInstance): any {
	// Initialize PostHog if not already initialized
	if (!posthogInstance.__SV) {
		let new_instance = posthogInstance;
		posthogInstance._i = [];

		// Initialize core functionality
		posthogInstance.init = function (apiKey: any, config: any, namespace: any) {
			// Helper to create method proxies
			function createMethodProxy(target: any, methodName: string) {
				const parts = methodName.split('.');
				if (parts.length === 2) {
					target = target[parts[0]];
					methodName = parts[1];
				}
				target[methodName] = function () {
					target.push([methodName].concat(Array.prototype.slice.call(arguments, 0)));
				};
			}

			// Set up script tag
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.crossOrigin = 'anonymous';
			script.async = true;
			script.src =
				config.api_host.replace('.i.posthog.com', '-assets.i.posthog.com') + '/static/array.js';

			const firstScript = document.getElementsByTagName('script')[0];
			firstScript?.parentNode?.insertBefore(script, firstScript);

			// Set up instance
			let instance = posthogInstance;
			if (namespace !== undefined) {
				instance = posthogInstance[namespace] = [];
			} else {
				namespace = 'posthog';
			}

			// Configure people analytics
			instance.people = instance.people || [];

			// Set up toString methods
			instance.toString = function (stub?: any) {
				let name = 'posthog';
				if (namespace !== 'posthog') {
					name += '.' + namespace;
				}
				if (!stub) {
					name += ' (stub)';
				}
				return name;
			};

			instance.people.toString = function () {
				return instance.toString(1) + '.people (stub)';
			};

			// Register all available methods
			const methods = [
				'init',
				'capture',
				'register',
				'register_once',
				'register_for_session',
				'unregister',
				'unregister_for_session',
				'getFeatureFlag',
				'getFeatureFlagPayload',
				'isFeatureEnabled',
				'reloadFeatureFlags',
				'updateEarlyAccessFeatureEnrollment',
				'getEarlyAccessFeatures',
				'on',
				'onFeatureFlags',
				'onSessionId',
				'getSurveys',
				'getActiveMatchingSurveys',
				'renderSurvey',
				'canRenderSurvey',
				'getNextSurveyStep',
				'identify',
				'setPersonProperties',
				'group',
				'resetGroups',
				'setPersonPropertiesForFlags',
				'resetPersonPropertiesForFlags',
				'setGroupPropertiesForFlags',
				'resetGroupPropertiesForFlags',
				'reset',
				'get_distinct_id',
				'getGroups',
				'get_session_id',
				'get_session_replay_url',
				'alias',
				'set_config',
				'startSessionRecording',
				'stopSessionRecording',
				'sessionRecordingStarted',
				'captureException',
				'loadToolbar',
				'get_property',
				'getSessionProperty',
				'createPersonProfile',
				'opt_in_capturing',
				'opt_out_capturing',
				'has_opted_in_capturing',
				'has_opted_out_capturing',
				'clear_opt_in_out_capturing',
				'debug',
				'getPageViewId'
			];

			methods.forEach((method) => createMethodProxy(instance, method));

			posthogInstance._i.push([apiKey, config, namespace]);
		};

		posthogInstance.__SV = 1;
	}
	return posthogInstance;
}
