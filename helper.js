$('#img2').click(function() {
        alert("hi");
});
function doThing() {
        alert('hi');
        $('#text').text("ballsack");
        alert($('#text').text());
}

function readURL(input) {
        if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
        $('.image')
                .attr('src', e.target.result)
                .show()
                // .width(150)
                // .height(200);
        };

        reader.readAsDataURL(input.files[0]);
        }
}

