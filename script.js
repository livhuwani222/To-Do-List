window.onload = function() {
    var btnAdd = document.getElementsByClassName('btn-add'), 
        activityName = document.getElementsByClassName('activity-name'), 
        activityTime = document.getElementsByClassName('activity-time'), 
        btnSave = document.getElementsByClassName('btn-save'), 
        ul = document.getElementById('list'), 
        li = document.getElementsByTagName('li'), 
        modalContainer = document.getElementsByClassName('modal-container'), 
        modal = document.getElementsByClassName('modal'), 
        closeModal = document.getElementsByClassName('close-modal'), 
        error = document.getElementById('error');
        
    btnAdd[0].onclick = function() {
        modalContainer[0].style.display = 'flex';
        setTimeout(function() {
            modal[0].style.webkitTransform = 'scale(1)';
               modal[0].style.mozTransform = 'scale(1)';
                modal[0].style.msTransform = 'scale(1)';
                 modal[0].style.oTransform = 'scale(1)';
                  modal[0].style.transform = 'scale(1)';
        }, 50);
    };
    
    closeModal[0].onclick = function() {
        modal[0].style.webkitTransform = 'scale(0)';
           modal[0].style.mozTransform = 'scale(0)';
            modal[0].style.msTransform = 'scale(0)';
             modal[0].style.oTransform = 'scale(0)';
              modal[0].style.transform = 'scale(0)';
        setTimeout(function() {
            modalContainer[0].style.display = 'none';
        }, 300);
    };
    
    btnSave[0].onclick = function() {
        if(activityName[0].value === '' || activityTime[0].value === '') {
            error.style.opacity = '1';
            setTimeout(function() {
                error.style.opacity = '0';
            }, 3000);
        } else {
            var newList = document.createElement('li');
            var content = document.createTextNode(activityName[0].value);
            var span = document.createElement('span');
            span.setAttribute('class', 'time');
            var time = document.createTextNode(activityTime[0].value);
            span.appendChild(time);
            newList.appendChild(content);
            newList.appendChild(span);
            ul.insertBefore(newList, li[li.length - 1]);
            
            modal[0].style.webkitTransform = 'scale(0)';
               modal[0].style.mozTransform = 'scale(0)';
                modal[0].style.msTransform = 'scale(0)';
                 modal[0].style.oTransform = 'scale(0)';
                  modal[0].style.transform = 'scale(0)';
            setTimeout(function() {
                modalContainer[0].style.display = 'none';
            }, 300);
            
            activityName[0].value = '';
            activityTime[0].value = '';
            error.style.opacity = '0';
            
        }
    };
}