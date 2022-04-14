
$("#enviar").click(function (event) {
    event.preventDefault('');
    retornarValor();
})
function retornarValor () {
    const key = "LkSrbHlBP2PnH3926XbegRtMk4obvkBb6RgJZ7u";
    const data = $("#data").val();
        $.ajax({
        type: "GET",
        url: `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${data}`,
        sucess: function (respostaServidor) {
            if (respostaServidor.media_type == "image"){
                $("#titulo").text(respostaServidor.title)
                $("#texto").text(respostaServidor.explanation)
                $("#imagem").attr("src", respostaServidor.url)
            }
            else if (respostaServidor.media_type == "video"){
                $("#titulo").text(respostaServidor.title)
                $("#texto").text(respostaServidor.explanation)
                $("#video").attr("src", respostaServidor.url)
            }
         
        }
    
    })
}


