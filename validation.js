const enrollmentForm = document.getElementById('enrollment-form');

enrollmentForm.addEventListener('submit', function(event) {
  
  event.preventDefault();
  
 
  const studentId = document.getElementById('student-id').value;
  
  // Validate student ID number
  if (!/^\d{6}$/.test(studentId)) {
    alert('Please enter a valid 6-digit student ID number.');
    return;
  }
  
  
  this.submit();
});
