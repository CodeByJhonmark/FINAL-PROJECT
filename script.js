document.addEventListener('DOMContentLoaded', function() {
    /*copy paste niyo lang to pre sa baba neto tapos palita niyo 
    "act1" ng act2 ganon tapos yung buttonAct1 palitan din ng buttonAct2 */
    const act1 = document.getElementById('buttonAct1');
    const act2 = document.getElementById('buttonAct2');
    const act3 = document.getElementById('buttonAct3');
    const act4 = document.getElementById('buttonAct4');
    const act5 = document.getElementById('buttonAct5');
    const act6 = document.getElementById('buttonAct6');
    const act7 = document.getElementById('buttonAct7');
    const act8 = document.getElementById('buttonAct8');
    const act9 = document.getElementById('buttonAct9');
    const act10 = document.getElementById('buttonAct10');
    const act11 = document.getElementById('buttonAct11');
    const act12 = document.getElementById('buttonAct12');
    const act13 = document.getElementById('buttonAct13');
    const act14 = document.getElementById('buttonAct14');
    const act15 = document.getElementById('buttonAct15');
    const act16 = document.getElementById('buttonAct16');
    const act17 = document.getElementById('buttonAct17');
    const act18 = document.getElementById('buttonAct18');
    const act19 = document.getElementById('buttonAct19');
    const act20 = document.getElementById('buttonAct20');
    const act21 = document.getElementById('buttonAct21');
    const act22 = document.getElementById('buttonAct22');
    const act23 = document.getElementById('buttonAct23');
    const act24 = document.getElementById('buttonAct24');
    const act25 = document.getElementById('buttonAct25');
    const act26 = document.getElementById('buttonAct26');
    const act27 = document.getElementById('buttonAct27');
    const act28 = document.getElementById('buttonAct28');
    const act29 = document.getElementById('buttonAct29');
    const act30 = document.getElementById('buttonAct30');
    const act31 = document.getElementById('buttonAct31');
    const act32 = document.getElementById('buttonAct32');
    const act33 = document.getElementById('buttonAct33');
    const act34 = document.getElementById('buttonAct34');

    
    const editorCard = document.getElementById('editorCard');
    const closeCardBtn = document.getElementById('closeCardBtn');
    const htmlInput = document.getElementById('htmlInput');
    const outputPreview = document.getElementById('outputPreview');
    const overlay = document.getElementById('overlay');
  
    function showEditorWithCode(exampleId) {
      const exampleDiv = document.getElementById(exampleId);
      if (!exampleDiv) return;
    
      const clonedDiv = exampleDiv.cloneNode(true);
    
      const scripts = clonedDiv.querySelectorAll('script');
      scripts.forEach(script => script.remove());
    
      const code = clonedDiv.innerHTML.trim();
    
      overlay.style.display = 'block';
      editorCard.style.display = 'block';
      htmlInput.value = code;
      outputPreview.innerHTML = code;
    
      document.body.style.overflow = 'hidden';
    }
  
    function closeEditor() {
      overlay.style.display = 'none';
      editorCard.style.display = 'none';
  
      document.body.style.overflow = '';
    }
  
    /*dito rin pre dagdag if tapos copy paste lang tapos yung 
    "act1" palitan kung anong act na*/
    if (act1) {
      act1.addEventListener('click', () => showEditorWithCode('act1'));
    }

    if (act2) {
      act2.addEventListener('click', () => showEditorWithCode('act2'));
    }
    if (act3) {
      act3.addEventListener('click', () => showEditorWithCode('act3'));
    }
    if (act4) {
      act4.addEventListener('click', () => showEditorWithCode('act4'));
    }
    if (act5) {
      act5.addEventListener('click', () => showEditorWithCode('act5'));
    }
    if (act6) {
      act6.addEventListener('click', () => showEditorWithCode('act6'));
    }
    if (act8) {
      act8.addEventListener('click', () => showEditorWithCode('act8'));
    }
    if (act7) {
      act7.addEventListener('click', () => showEditorWithCode('act7'));
    }
    if (act9) {
      act9.addEventListener('click', () => showEditorWithCode('act9'));
    }
    if (act10) {
      act10.addEventListener('click', () => showEditorWithCode('act10'));
    }
    if (act11) {
      act11.addEventListener('click', () => showEditorWithCode('act11'));
    }
    if (act12) {
      act12.addEventListener('click', () => showEditorWithCode('act12'));
    }
    if (act13) {
      act13.addEventListener('click', () => showEditorWithCode('act13'));
    }
    if (act14) {
      act14.addEventListener('click', () => showEditorWithCode('act14'));
    }
    if (act15) {
      act15.addEventListener('click', () => showEditorWithCode('act15'));
    }
    if (act16) {
      act16.addEventListener('click', () => showEditorWithCode('act16'));
    }
    if (act17) {
      act17.addEventListener('click', () => showEditorWithCode('act17'));
    }
    if (act18) {
      act18.addEventListener('click', () => showEditorWithCode('act18'));
    }
    if (act19) {
      act19.addEventListener('click', () => showEditorWithCode('act19'));
    }
    if (act20) {
      act20.addEventListener('click', () => showEditorWithCode('act20'));
    }
    if (act21) {
      act21.addEventListener('click', () => showEditorWithCode('act21'));
    }
    if (act22) {
      act22.addEventListener('click', () => showEditorWithCode('act22'));
    }
    if (act23) {
      act23.addEventListener('click', () => showEditorWithCode('act23'));
    }
    if (act24) {
      act24.addEventListener('click', () => showEditorWithCode('act24'));
    }
    if (act25) {
      act25.addEventListener('click', () => showEditorWithCode('act25'));
    }
    if (act26) {
      act26.addEventListener('click', () => showEditorWithCode('act26'));
    }
    if (act27) {
      act27.addEventListener('click', () => showEditorWithCode('act27'));
    }
    if (act28) {
      act28.addEventListener('click', () => showEditorWithCode('act28'));
    }
    if (act29) {
      act29.addEventListener('click', () => showEditorWithCode('act29'));
    }
    if (act30) {
      act30.addEventListener('click', () => showEditorWithCode('act30'));
    }
    if (act31) {
      act31.addEventListener('click', () => showEditorWithCode('act31'));
    }
    if (act32) {
      act32.addEventListener('click', () => showEditorWithCode('act32'));
    }
    if (act33) {
      act33.addEventListener('click', () => showEditorWithCode('act33'));
    }
    if (act34) {
      act34.addEventListener('click', () => showEditorWithCode('act34'));
    }
    if (closeCardBtn) {
      closeCardBtn.addEventListener('click', closeEditor);
    }
  
    if (overlay) {
      overlay.addEventListener('click', closeEditor);
    }

    if (htmlInput) {
      htmlInput.addEventListener('input', () => {
        outputPreview.innerHTML = htmlInput.value;
      });
    }
  });
  