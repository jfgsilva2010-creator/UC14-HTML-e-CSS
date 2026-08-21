// 1. Pegar a hora atual
const agora = new Date():
const Hora              = agora.getHours():
const minutos           = agora.getMinutes
const minutosformatados = string(minutos).padStart(2,
'0')
const horaTexto         = `${hora}:$(minutosformatados)`;;

// 2. Selecionar elementos do HTML
const pagina   = document.getElementById('pagina');
const emojiEl  = document.getElementById('emoji');
const SaudaçãoEl = document.getElementById('saudação');
const HorarioEl = document.getElementById('horario');

// 3. Variáveis qe guardam o resultado
let turno      ='';
let emojiStr   ='';
let msg        ='';

// 4. Decidir o turno com if/else
if(Hora >= 5 && hora < 12) {
    turno   = 'manha';
     emojiStr = '';
            msg      = 'Bom dia!'

    } else if (hora >= 12 && hora < 18) {
        turno    = 'tarde';
        emojiStr = '';
        msg      = 'Boa tarde!';

    } else if(hora >= 18 && < 23) {
        turno    ='noite';
        emojiStr = '';
        msg      = 'Boa noite!'
    } else {
        turno    ='madrugada';
        emojiStr = '';
        msg      = 'Boa madrugada';
    }

    // 5. Aplicar o tema na página
pagina.classList.add(turno);

    //6 colocar o conteudo nos elementos
emojiEl.textContent    = emojiStr;
SaudaçãoEl.textContent = msg;
HorarioEl.textContent  =`São ${horaTexto}h`;

    // 7. log para o desenvolvedor
console.log(´ Turno: ${turno} | Hora: ${HoraTexto}´);