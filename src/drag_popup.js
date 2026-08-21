export default class DragPopup {
    constructor(parent, gantt, position) {
        this.parent = parent;
        this.gantt = gantt;
        this.position = position;

        this.make();
    }

    make() {
        this.parent.innerHTML = `
            <div class="title">Titel</div>
        `;
        this.hide();
    }

    show({ x, y, task, target, startDate }) {
        let posLeft;

        if (this.position === 'left') {
            posLeft = x - 10 - this.parent.offsetWidth;
        } else {
            posLeft = x + 10;
        }

        this.parent.style.left = posLeft + 'px';
        this.parent.style.top = y - 2 + 'px';
        this.parent.classList.remove('hide');
        this.updateContent(startDate);
    }

    updateContent(startDate) {
        this.parent.innerHTML = `
            <div class="title">${startDate}</div>
        `;
    }

    hide() {
        this.parent.classList.add('hide');
    }
}
