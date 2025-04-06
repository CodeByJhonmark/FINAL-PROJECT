document.addEventListener('DOMContentLoaded', function() {
    /*copy paste niyo lang to pre sa baba neto tapos palita niyo 
    "act1" ng act2 ganon tapos yung buttonAct1 palitan din ng buttonAct2 */
    const act1 = document.getElementById('buttonAct1');
    const act2 = document.getElementById('buttonAct2');
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
  