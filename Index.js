const email = 'kemmojr@gmail.com';

function onLoad() {
}

function copyEmailToClipboard() {
    // Copy the text inside the text field
    navigator.clipboard.writeText(email);

    alert(`${email} copied to clipboard`);
}