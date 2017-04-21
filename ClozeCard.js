function ClozeCard(text, cloze) {

    this.fullText = text;
    this.cloze = cloze;
    var clozeCheck = (this.fullText).search(this.cloze);

    if (clozeCheck !== -1) {

        this.partialText = function() {
            var partial = (this.fullText).replace(this.cloze, "...");
            return partial;
        }

        this.partial = this.partialText();

    } else {
        console.log('Incorrect structure. The full text does not include the cloze answer. Please try again');
        this.fullText = '';
        this.cloze = '';
    }

}



module.exports = ClozeCard;
