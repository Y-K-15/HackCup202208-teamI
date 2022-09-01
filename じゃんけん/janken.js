        let numberWinner = 0;
        let count = 0;
        
        function R_click(p_janken_r){
            let janken = ['グー','チョキ','パー'];
            let janken_r = Math.floor(Math.random()*3);

            let l_janken = ['グー','チョキ','パー'];
            let l_janken_r = Math.floor(Math.random()*3);

            let p_janken = ['グー','チョキ','パー'];


            if (janken_r === p_janken_r === l_janken_r){
                result_end = "あいこです";


            }else if(janken_r === 0 && p_janken_r === 1 && l_janken_r === 2){
                result_end = "あいこです";

            }else if(janken_r === 1 && p_janken_r === 2 && l_janken_r === 0){
                result_end = "あいこです";

            }else if(janken_r === 2 && p_janken_r === 0 && l_janken_r === 1){
                result_end = "あいこです";

            }else if(janken_r === 0 && p_janken_r === 2 && l_janken_r === 1){
                result_end = "あいこです";

            }else if(janken_r === 1 && p_janken_r === 0 && l_janken_r === 2){
                result_end = "あいこです";

            }else if(janken_r === 2 && p_janken_r === 1 && l_janken_r === 0){
                result_end = "あいこです";

            }else if (janken_r === 2 && p_janken_r === 0 && l_janken_r === 2){
                result_end = "あなたは負け";

            }else if (janken_r === 0 && p_janken_r === 1 && l_janken_r === 0){
                result_end = "あなたは負け";


            }else if (janken_r === 1 && p_janken_r === 2 && l_janken_r === 1){
                result_end = "あなたは負け";


            }
            else if (janken_r === 1 && p_janken_r === 1 && l_janken_r === 0){
                result_end = "ジェイの勝ち";
                


            }else if (janken_r === 2 && p_janken_r === 2 && l_janken_r === 1){
                result_end = "ジェイの勝ち";


            }else if (janken_r === 0 && p_janken_r === 0 && l_janken_r === 2){
                result_end = "ジェイの勝ち";


            }else if (janken_r === 0 && p_janken_r === 1 && l_janken_r === 1){
                result_end = "トミーの勝ち";


            }else if (janken_r === 1 && p_janken_r === 2 && l_janken_r === 2){
                result_end = "トミーの勝ち";


            }else if (janken_r === 2 && p_janken_r === 0 && l_janken_r === 0){
                result_end = "トミーの勝ち";}
                


            else if (janken_r === 0 && p_janken_r === 2 && l_janken_r === 0){
                result_end = "あなたの勝ち";
                count ++;
                

            }else if (janken_r === 1 && p_janken_r === 0 && l_janken_r === 1){
                result_end = "あなたの勝ち";
                count ++;

            }else if (janken_r === 2 && p_janken_r === 1 && l_janken_r === 2){
                result_end = "あなたの勝ち";
                count ++;

            }
            else if (janken_r === 0 && p_janken_r === 0 && l_janken_r === 1 || janken_r === 1 && p_janken_r === 1 && l_janken_r === 2 || janken_r === 2 && p_janken_r === 2 && l_janken_r === 0){
                result_end = "トミーとあなたの勝ち";

                count ++;
                numberWinner ++;

            }else if (janken_r === 1 && p_janken_r === 0 && l_janken_r === 0 || janken_r === 2 && p_janken_r === 1 && l_janken_r === 1|| janken_r === 0 && p_janken_r === 2 && l_janken_r === 2){
                result_end = "ジェイとあなたの勝ち";

            count ++;
            numberWinner ++;
            }
            else {
                result_end = "あいこです";

            }

            
                function numberWinner_1(){
                if (count=1)
                    numberWinner_1 =1;
                }


                console.log(count);


            document.getElementById("janken1").innerHTML = "あなたは" + p_janken[p_janken_r] + 'を選択しました';
            document.getElementById("janken2").innerHTML = "トミーは" + janken[janken_r] + "を選びました。" + "ジェイは" + l_janken[l_janken_r] + "を選びました。" + "結果は" + result_end;
            document.getElementById("janken3").innerHTML ="勝った回数は「" + count + "回」" 
            
            
 

            return 0;
        }




