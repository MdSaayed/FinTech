 // Function to format the date
 function blogDateFormat(date) {
    // Create a new Date object from the string
    const formattedDate = new Date(date);
  
    // Return the formatted date string
    return formattedDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  export default blogDateFormat;