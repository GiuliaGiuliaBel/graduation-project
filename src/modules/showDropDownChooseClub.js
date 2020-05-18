const showDropDownChooseClub = () => {

    const clubsList = document.querySelector('.clubs-list'),
    clubsListUl = document.querySelectorAll('.clubs-list>ul')[0];

    clubsList.addEventListener('click', () => {
    clubsListUl.style.display = 'block';
    });   
    
    clubsListUl.addEventListener('mouseleave', event => {
        if(event.target.tagName === "UL") {
            clubsListUl.style.display = 'none';
        }
    });

};

export default showDropDownChooseClub;