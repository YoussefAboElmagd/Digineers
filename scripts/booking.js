var checkboxesList = document.getElementsByName('location_of_course');
var checkboxesList2 = document.getElementsByName('subscription_id');

function checkForBoxes(checkedBox,checkList){
    for(var i = 0;i<checkList.length;i++){
        checkList[i].checked = false;
    }
    checkedBox.checked = true;
}