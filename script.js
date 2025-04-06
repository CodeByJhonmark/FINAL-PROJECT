document.addEventListener('DOMContentLoaded', function() {
    /*copy paste niyo lang to pre sa baba neto tapos palita niyo 
    "act1" ng act2 ganon tapos yung buttonAct1 palitan din ng buttonAct2 */
    const act1 = document.getElementById('buttonAct1');
    const act2 = document.getElementById('buttonAct2');
    const act17 = document.getElementById('buttonAct17');
    const act18 = document.getElementById('buttonAct18');
    const act19 = document.getElementById('buttonAct19');
    const act20 = document.getElementById('buttonAct20');
    
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
  