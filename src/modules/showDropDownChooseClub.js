const showDropDownChooseClub = () => {

    const clubsList = document.querySelector('.clubs-list'),
    clubsListUl = document.querySelectorAll('.clubs-list>ul')[0];

    clubsList.addEventListener('click', () => {
    clubsListUl.style.display = 'block';
    console.log(5);
    });    
    
    
};

export default showDropDownChooseClub;