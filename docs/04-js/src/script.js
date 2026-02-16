function dragElement(terrariumElement)
{
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;
}


dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));

function pointerDrag(e)
{
    e.preventDefault();
    console.log(e);
    pos3 = e.clientX;
    pos4 = e.clientY;
    DocumentTimeline.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
}