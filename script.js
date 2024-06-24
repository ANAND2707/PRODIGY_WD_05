const weatherData = {
    Maharashtra: {
        temperature: '32°C',
        description: 'Sunny',
        background: 'url(img/sunny.jpg)'
    },
    Delhi: {
        temperature: '38°C',
        description: 'Hot',
        background: 'url(img/hot.jpg)'
    },
    Karnataka: {
        temperature: '28°C',
        description: 'Rainy',
        background: 'url(img/rainy.jpg)'
    },
    Tamil_Nadu: {
        temperature: '30°C',
        description: 'Cloudy',
        background: 'url(img/cloudy.jpg)'
    },
    Gujarat: {
        temperature: '35°C',
        description: 'Clear',
        background: 'url(img/clear.jpg)'
    },
    West_Bengal: {
        temperature: '31°C',
        description: 'Windy',
        background: 'url(img/windy.jpg)'
    },
    Rajasthan: {
        temperature: '40°C',
        description: 'Hot',
        background: 'url(img/hot.jpg)'
    },
    Kerala: {
        temperature: '29°C',
        description: 'Humid',
        background: 'url(img/humid.jpg)'
    },
    Uttar_Pradesh: {
        temperature: '36°C',
        description: 'Sunny',
        background: 'url(img/sunny.jpg)'
    },
    Punjab: {
        temperature: '33°C',
        description: 'Clear',
        background: 'url(img/clear.jpg)'
    }
};


$(document).ready(function() {
    $('.js-example-basic-single').select2({
        placeholder: 'Select a state',
        allowClear: true
    });

    $('#state-select').on('change', function() {
        const state = $(this).val().replace(' ', '_');
        if (weatherData[state]) {
            updateWeatherInfo(state);
        }
    });
});

function updateWeatherInfo(state) {
    $('#state-name').text(state.replace('_', ' '));
    $('#temperature').text(`Temperature: ${weatherData[state].temperature}`);
    $('#weather-description').text(`Weather: ${weatherData[state].description}`);
    $('body').css('background-image', weatherData[state].background);
    $('#weather-info').removeClass('hidden');
}
