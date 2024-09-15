let quote = document.getElementById('quote'),
    btn = document.getElementById('btn'),
    autor = document.getElementById('autor');
quoteArr = 
[
    '«To have another language is to possess a second soul.»',
    '«We do not remember days, we remember moments.»',
    '«Always forgive your enemies. Nothing annoys them more.»',
    '«Only two things are infinite — the universe and human stupidity, and I’m not sure about the former.»',
    '«No longer chasing butterflies, Camila and I planted our garden so they could come to us.»',
    '«Take the first step in faith. You don’t have to see the whole staircase, just take the first step.»',
    '«Knowledge is power.»',
    '«May the Force be with you.»',
    '«Love all, trust a few, do wrong to none.»',
    '«Now or never!»',
]
autorArr =
 [
    '- Charlemagne.', 
    '- Cesare Pavese.',
    '- Oscar Wilde.',
    '- Albert Einstein.',
    '- Matthew Mcconaughey',
    '- Martin Luther King Jr.',
    '- Sir Francis Bacon',
    '- Star Wars',
    '- Unknown',
    '- Unknown',
]

btn.addEventListener('click', () => {
    autoQuote();
})
function autoQuote() {

    let num = Math.floor(Math.random() * 10);
    quote.textContent = `${quoteArr[num]}`;
    autor.textContent=`${autorArr[num]}`;


}