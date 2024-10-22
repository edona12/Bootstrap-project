document.addEventListener('DOMContentLoaded', () => {
  'use strict';


  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

  if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
      tooltipTriggerList.forEach(tooltipTriggerEl => {
          new bootstrap.Tooltip(tooltipTriggerEl);
      });
  } else {
      console.error('Bootstrap Tooltip is not available. Please check if Bootstrap JS is properly loaded.');
  }
});
