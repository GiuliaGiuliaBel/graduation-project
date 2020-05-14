const showModal = () => {
    
    const freeVisit = document.querySelector('.free-visit'),
        closeForm = document.querySelector('.close-form'),
        freeVisitForm = document.getElementById('free_visit_form');

         freeVisit.addEventListener('click', () => {
         freeVisitForm.style.display = "block";
     });
     
     closeForm.addEventListener('click', () => {
      console.log(2);  
     })
};

export default showModal;