//my current email
const email = 'kemmojr@gmail.com';

function loadListeners() {
    document.getElementById('aboutButton').addEventListener('click', () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });

    document.querySelectorAll('.nav-link ').forEach(link => {
        link.addEventListener('click', () => {
          setTimeout(() => {
            const openedCanvas = document.getElementById('closeNavBar');
            openedCanvas.click();
          }, 500);
      });
    });

}

function calculateOffset() {
    // Calculate offset based on screen width or any dynamic content changes
    const screenWidth = window.innerWidth;
  
    // Set different offsets based on screen width or other conditions as needed
    let offset = 50; // Default offset
  
    if (screenWidth < 768) {
      offset = 30; // Adjust offset for smaller screens
    } else if (screenWidth < 992) { 
      offset = 60;
    } else if (screenWidth < 1200) { 
      offset = 70;
    } else if (screenWidth >= 1200) {
      offset = 70; // Adjust offset for larger screens
    }
  
    return offset;
  }

// Function to determine which section is currently active based on scroll position
function getActiveSection() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

  const scrollPosition = window.scrollY;

  // Iterate through each section to find which one is in the viewport
  document.querySelectorAll('a.anchor').forEach(section => {
    const sectionTop = section.offsetTop - calculateOffset(); // Adjusted offset for better accuracy
    //const sectionTop = section.offsetTop - calculateOffset(); // Adjusted offset for better accuracy
    const id = section.getAttribute('id');

    
    if (scrollPosition >= sectionTop) {
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add active class to the corresponding link
      if (id === 'about') {
        document.getElementById(`${id}Button`).classList.add('active');
      } else {
        document.querySelector(`nav ul li a[href="#${id}"]`).classList.add('active');
      }
      
    }
  });
}

// Listen for scroll events and call the function to update active section
window.addEventListener('scroll', getActiveSection);

// Initial call to set the active section on page load
getActiveSection();


function copyEmailToClipboard() {
    // Copy the text inside the text field
    navigator.clipboard.writeText(email);

    alert(`${email} copied to clipboard`);
}