import notie from 'corner-notie';
import $ from 'jquery';

let hostStart = 'http://localhost:8001'

const sendInfo = () => {
    $.ajax({
        url: hostStart + '/api/hello',
        dataType: 'json',
        success: res => {
            notie(res.result);
        }
    });
};

sendInfo();

$('.screen').on('click', function () {
    sendInfo();
});