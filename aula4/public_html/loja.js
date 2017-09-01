$(document).ready(function() {
    $('#min').on('input', function() {
        atualizaMin();
    });

    $('#max').on('input', function() {
       atualizaMax();
    });
    
    function atualizaMin() {
        var min = $('#min').val();
        $('#precoMin').html(min);
    }
    
    function atualizaMax() {
        var max = $('#max').val();
        $('#precoMax').html(max);
    }
    
    function loadProdutos(){
        $.ajax({
            url: 'js/produtos.json',
            method: 'GET',
            sucess: function (data){
                produtos = data;
                atualizaLista();
            }
        });
    }
    
    var produtos = [];
    
    function atualizaLista() {
        var min  = $('#min').val();
        var max  = $('#max').val();
        
        for (p of produtos) {
            if (p.preco >= min && p.preco <= max) {
                
            }
            $('#lista').append('<li>' + p.nome + ' - R$ '+ p.preco + '</li>');
        }
    }
    
    atualizaMin();
    atualizaMax();
    loadProdutos();
});