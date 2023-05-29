const expansionPanelHeader = document.querySelectorAll('.expansion-panel-header');
const expansionPanelBody = document.querySelector('.expansion-panel-body');

var expansed = false;

expansionPanelHeader.forEach(expansionElement => {
    expansionElement.addEventListener('click', () => {
            if (expansed == false) {
                expansed = true;
                expansionPanelBody.style = `height: 350px`;
            }       
            else if (expansed == true){
                expansed = false;
                expansionPanelBody.style = `height: 0px`;
            }
        })
    
    }
);