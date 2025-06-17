$(function() {
    const stateSelect = document.getElementById('state');

    if (stateSelect) {
        states.forEach(function(state) {
            const option = document.createElement('option');
            option.value = state.abbreviation;
            option.text = state.name;
            stateSelect.appendChild(option);
        });

        $( "#department" ).selectmenu();
        $( "#state" ).selectmenu();

        $('#date-of-birth').datetimepicker({
            timepicker: false,
            format: 'm/d/Y'
        });

        $('#start-date').datetimepicker({
            timepicker: false,
            format: 'm/d/Y'
        });
    }
});
