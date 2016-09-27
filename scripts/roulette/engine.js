 var colors = ['#c10000', "black",'#c10000', "black",'#c10000', "black",'#c10000', "black",
  '#c10000', "black",'#c10000', "black",'#c10000', "black",'#c10000', "black",'#c10000',
   "black",'#30e708','black', "#c10000",'black', "#c10000",'black', "#c10000",'black', "#c10000",
   'black', "#c10000",'black', "#c10000",'black', "#c10000",'black', "#c10000",'black','#c10000', "#30e708"];
  var numbers = ['27','10','25','29','12','8','19','31','18','6','21',
                      '33','16','4','23','35','14','2','0','28','9','26','30',
                      '11','7','20','32','17','5','22','34','15','3','24','36',
                      '13','1','00'];


class Roulette{
    constructor(colors, numbers){
        this.colors = colors;
        this.numbers = numbers;
    }
}

    function drawRouletteWheel() {
    var canvas = document.getElementById("rouletteCanvas");
    if (canvas.getContext) {
      var startAngle = 0;
      var arc = Math.PI / 19;
      var outsideRadius = 240;
      var textRadius = 175;
      var insideRadius = 125;
      var middleRadius = 145;
      var canvasWidth = 400;
      var canvasHeight = 400;
      var xCoord = 250;
      var yCoord = 250;
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      
      ctx.strokeStyle = "black";
      ctx.lineWidth = 10;

      ctx.font = '14px arial';

      for(var i = 0; i < 38; i++) {
        var angle = startAngle + i * arc;
        ctx.fillStyle = colors[i];

        ctx.beginPath();
        ctx.arc(xCoord, yCoord, outsideRadius, angle, angle + arc, false);
        ctx.arc(xCoord, yCoord, insideRadius, angle + arc, angle, true);
        ctx.arc(xCoord, yCoord, middleRadius, angle + arc, angle, true);

        ctx.stroke();
        ctx.fill();
        ctx.save();

        ctx.shadowColor = "gray";
        ctx.fillStyle = "white";
        ctx.translate(xCoord + Math.cos(angle + arc / 2) * textRadius, yCoord + Math.sin(angle + arc / 2) * textRadius);
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        var text = numbers[i];
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
      }

      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.moveTo(xCoord - 4, yCoord - (outsideRadius + 5));
      ctx.lineTo(xCoord + 4, yCoord - (outsideRadius + 5));
      ctx.lineTo(xCoord + 4, yCoord - (outsideRadius - 5));
      ctx.lineTo(xCoord + 9, yCoord - (outsideRadius - 5));
      ctx.lineTo(xCoord + 0, yCoord - (outsideRadius - 13));
      ctx.lineTo(xCoord - 9, yCoord - (outsideRadius - 5));
      ctx.lineTo(xCoord - 4, yCoord - (outsideRadius - 5));
      ctx.lineTo(xCoord - 4, yCoord - (outsideRadius + 5));
      ctx.fill();
    }
  }