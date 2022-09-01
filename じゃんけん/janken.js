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
            }
            else if (janken_r === 0 && p_janken_r === 2 && l_janken_r === 0){
                result_end = "あなたの勝ち";

            }else if (janken_r === 1 && p_janken_r === 0 && l_janken_r === 1){
                result_end = "あなたの勝ち";

            }else if (janken_r === 2 && p_janken_r === 1 && l_janken_r === 2){
                result_end = "あなたの勝ち";

            }else if (janken_r === 2 && p_janken_r === 0 && l_janken_r === 2){
                result_end = "あなたの負け";

            }else if (janken_r === 0 && p_janken_r === 1 && l_janken_r === 0){
                result_end = "あなたの負け";

            }else if (janken_r === 1 && p_janken_r === 2 && l_janken_r === 1){
                result_end = "あなたの負け";

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
                result_end = "トミーの勝ち";

            }else if (janken_r === p_janken_r === 0 && l_janken_r === 1){
                result_end = "あなたの勝ち";

            }else if (janken_r === p_janken_r === 1 && l_janken_r === 2){
                result_end = "あなたの勝ち";

            }else if (janken_r === p_janken_r === 2 && l_janken_r === 0){
                result_end = "あなたの勝ち";

            }else if (janken_r === 1 && p_janken_r === l_janken_r === 0){
                result_end = "あなたの勝ち";

            }else if (janken_r === 2 && p_janken_r === l_janken_r === 1){
                result_end = "あなたの勝ち";

            }else if (janken_r === 0 && p_janken_r === l_janken_r === 2){
                result_end = "あなたの勝ち";

            }
            else {
                result_end = "あなたの負け";

            }

            // function set_visibility() {
            //     if (document.getElementById('btn_1').checked || document.getElementById('btn_2').checked || document.getElementById('btn_3').checked){
            //       // btn_1を非表示
            //       document.getElementById('btn_1').style.visibility = 'hidden'
            //       document.getElementById('btn_2').style.visibility = 'hidden'
            //       document.getElementById('btn_3').style.visibility = 'hidden'
            //     }
                // else if {
                //   // btn_1を表示
                //   document.getElementById('btn_1').style.visibility = 'visible'
                // }
              


            document.getElementById("janken1").innerHTML = p_janken[p_janken_r] + 'を選択しました';
            document.getElementById("janken2").innerHTML = "トミーは" + janken[janken_r] + "を選びました。" + "ジェイは" + l_janken[l_janken_r] + "を選びました。" + "結果は" + result_end;
            
        }