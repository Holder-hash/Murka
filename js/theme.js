function darkMode() {
    const body = document.body;
    const wrapper = document.querySelector('.wrapper');
    const subBlockHeader = document.querySelectorAll('.sub-block-header');
    const subBlockDescription = document.querySelectorAll('.sub-block-description');
    const wasDarkMode = localStorage.getItem('darkMode') === 'true';

    subBlockHeader.forEach(header => {
        header.classList.toggle('dark-mode-text', !wasDarkMode)   
    });

    subBlockDescription.forEach(description => {
        description.classList.toggle('dark-mode-text', !wasDarkMode)   
    });

    localStorage.setItem('darkMode', !wasDarkMode)
    body.classList.toggle('dark-mode', !wasDarkMode)
    wrapper.classList.toggle('dark-mode', !wasDarkMode)

    if (!wasDarkMode) {
        document.querySelectorAll('.main_support').forEach(supportEl => {
            supportEl.style = 'color: white';
            document.querySelector('.a').style = 'color: white';
        });

        document.querySelectorAll('.convolutions').forEach(supportConvolutions => {
            supportConvolutions.style = `box-shadow: 0 0 1px white`;
        });

        document.querySelector('.theme-btn').textContent = 'wb_sunny'
        // document.querySelector('.theme-btn').style = 'color: white'

        document.querySelectorAll('.trigger').forEach(mainCommandsHeader => {
            mainCommandsHeader.style = 'color: white'   
        })
        document.querySelectorAll('.content').forEach(mainCommandsBody => {
            mainCommandsBody.style = 'color: white' 
        })

        document.querySelector('.command_countenier1 h2').style = 'color: white';

        document.querySelector('.input_search').style = 'color: white';

        document.querySelector('.search_ickon').style = 'color: white';

        document.querySelector('.item-selection-container').style = 'background-color: #444444; box-shadow: 0 0 10px #ff00bf28'
        document.querySelectorAll('.search_ingo_commands').forEach(searchIngoCommands => {
            searchIngoCommands.style = 'background-color: #818181; color: rgb(196, 196, 196);'
        })
    }
    else {
        
        // support us page
        
        document.querySelectorAll('.main_support').forEach(supportEl => {
            supportEl.style = 'color: black';
            document.querySelector('.a').style = 'color: black';
        });

        document.querySelectorAll('.convolutions').forEach(supportConvolutions => {
            supportConvolutions.style = `box-shadow: 0 0 1px black`;
        });

        
        document.querySelector('.theme-btn').textContent = 'dark_mode'
        // document.querySelector('.theme-btn').style = 'color: black'

        document.querySelectorAll('.trigger').forEach(mainCommandsHeader => {
            mainCommandsHeader.style = 'color: black'   
        })
        document.querySelectorAll('.content').forEach(mainCommandsBody => {
            mainCommandsBody.style = 'color: black'   
        })

        document.querySelector('.command_countenier1 h2').style = 'color: black';

        document.querySelector('.input_search').style = 'color: black';

        document.querySelector('.search_ickon').style = 'color: black';   

        document.querySelector('.item-selection-container').style = 'background-color: #dadada'
        
        document.querySelectorAll('.search_ingo_commands').forEach(searchIngoCommands => {
            searchIngoCommands.style = 'background-color: rgb(255, 255, 255); color: black;'
        })

    }
}

document.querySelector('.theme-btn').addEventListener('click', darkMode)

function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkMode') === 'true')
    document.querySelector('.wrapper').classList.toggle('dark-mode', localStorage.getItem('darkMode') === 'true')

    document.querySelectorAll('.sub-block-header').forEach(header => {
        header.classList.toggle('dark-mode-text', localStorage.getItem('darkMode') === 'true')   
    });

    document.querySelectorAll('.sub-block-description').forEach(description => {
        description.classList.toggle('dark-mode-text', localStorage.getItem('darkMode') === 'true')   
    });

    if (localStorage.getItem('darkMode') === 'true') {

         // support us page
        
        document.querySelectorAll('.main_support').forEach(supportEl => {
            supportEl.style = 'color: white';
            document.querySelector('.a').style = 'color: white';
        });

        document.querySelectorAll('.convolutions').forEach(supportConvolutions => {
            supportConvolutions.style = `box-shadow: 0 0 1px white`;
        });
        

        document.querySelector('.theme-btn').textContent = 'wb_sunny'
        // document.querySelector('.theme-btn').style = 'color: white'


        // commands page

        document.querySelectorAll('.trigger').forEach(mainCommandsHeader => {
            mainCommandsHeader.style = 'color: white'   
        })
        document.querySelectorAll('.content').forEach(mainCommandsBody => {
            mainCommandsBody.style = 'color: white'   
        })

        document.querySelector('.command_countenier1 h2').style = 'color: white';
        document.querySelector('.input_search').style = 'color: white';
        document.querySelector('.search_ickon').style = 'color: white';  
        document.querySelector('.item-selection-container').style = 'background-color: #444444; box-shadow: 0 0 10px #ff00bf28';
        document.querySelectorAll('.search_ingo_commands').forEach(searchIngoCommands => {
            searchIngoCommands.style = 'background-color: #818181; color: rgb(196, 196, 196);'
        })

    }
    else {
        document.querySelector('.theme-btn').textContent = 'dark_mode';
        
        // document.querySelector('.theme-btn').style = 'color: black'

        // commands page
        document.querySelector('.item-selection-container').style = 'background-color: #dadada'

        
        document.querySelectorAll('.trigger').forEach(mainCommandsHeader => {
            mainCommandsHeader.style = 'color: black';   
        })
        document.querySelectorAll('.content').forEach(mainCommandsBody => {
            mainCommandsBody.style = 'color: black';  
        })

        document.querySelector('.command_countenier1 h2').style = 'color: black';
        document.querySelector('.input_search').style = 'color: black';

        document.querySelector('.search_ickon').style = 'color: black';
        document.querySelectorAll('.search_ingo_commands').forEach(searchIngoCommands => {
            searchIngoCommands.style = 'background-color: rgb(255, 255, 255); color: black;'
        })



        // support us page
        
        document.querySelectorAll('.main_support').forEach(supportEl => {
            supportEl.style = 'color: black';
            document.querySelector('.a').style = 'color: black';
        });

        document.querySelectorAll('.convolutions').forEach(supportConvolutions => {
            supportConvolutions.style = `box-shadow: 0 0 1px black`;
        });
        
    }  

    
}

document.addEventListener('DOMContentLoaded', onload);