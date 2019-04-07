    window.onload = function(){
 

            var stage = document.getElementById('canvas');
            var ctx = stage.getContext("2d");
            document.addEventListener("keydown", keyPush);
            setInterval(game, 120);
 
            const vel = 1;
            var vx = vy = 0;
            var px = 10;
            var py = 15;
            var tp = 30;
            var qp = 15;


            var trail = [];
            tail = 1;

            var coresCobra = [];

            var cont = 0;



            var pontos = 0;

            //apple 
            var cores = ["#32ddf4", "#1181f9", "#ef2871", "#deff3a", "#28ff7e", "#ff2828"];
            var getColorApple = cores[Math.floor(Math.random()*cores.length)];
            var apple = {x:10,y:10,cor:getColorApple};
            //apple 

             
             coresCobra[0] = cores[0];

             trail.push({x:px,y:py,color:coresCobra[0]});
 
            function game(){
                px += vx;
                py += vy;
                if (px <0) {
                    px = qp-1;
                }
                if (px > qp-1) {
                    px = 0;
                }
                if (py < 0) {
                    py = qp-1;
                }
                if (py > qp-1) {
                    py = 0;
                }
 
                ctx.fillStyle = "black";
                ctx.fillRect(0,0, stage.width, stage.height);
 
                ctx.fillStyle = getColorApple;
                ctx.fillRect(apple.x*tp, apple.y*tp, tp,tp);


                
 
                
                for (var i = 0; i < trail.length; i++) {
                	
                	ctx.fillStyle = coresCobra[i];
                
                    ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1);

                    if (trail[i].x == px && trail[i].y == py && tail >1)
                    {	
                        vx = vy=0;
                        tail =1;
                        coresCobra.length = 0;
                        console.log(coresCobra);
                        alert("Voce comeu vc mesmo - GAME OVER!!");
                        coresCobra[0] = cores[0];
                        cont=0;
                        MenosPonto();

                    }
                }

 	
            	trail.push({x:px,y:py});
            	

               
                while (trail.length > tail) {
                    trail.shift();
                    
                }
 				 
                if (apple.x==px && apple.y==py){
                	cont++;
                    tail++;
                    coresCobra[cont] = getColorApple;
                    MaisPonto();
                    getColorApple = cores[Math.floor(Math.random()*cores.length)];
                    apple.x = Math.floor(Math.random()*qp);
                    apple.y = Math.floor(Math.random()*qp);
                   
                }
 
            }

            function MaisPonto(){
            	pontos+=10;
            	console.log(pontos);
            	document.getElementById("pontos").innerHTML = "PONTOS: "+ pontos;
            	
            }

            function MenosPonto(){
            	pontos = 0;
            }
                
 
            function keyPush(event){
            	var key =  event.keyCode;

            	if(key == 37){//esquerda
            		if(vx > 0){

            		}else{
            			vx = -vel;
                    	vy = 0;	
            		}
            		
            	}else if(key == 38){//cima
            		if(vy > 0){

            		}else{
            		vx = 0;
                     vy = -vel;
            		}
            		 
            	}else if(key == 39){//direita
            		if(vx < 0){

            		}else{
            			vx = vel;
                     	vy = 0;	
            		}
            		 
            	}else if(key == 40){//baixo
            		if(vy < 0){

            		}else{
            			vx = 0;
                    vy = vel;
            		}
            		
            	}  
 
            }
 
        }
