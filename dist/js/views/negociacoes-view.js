export class NegociacoesView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template() {
        return `
          <table class="table table-hover table-bordered">

                    <thead>
                        <tr>
                            <th>Data </th>
                            <th>Valor </th>
                            <th>Quantidade </th>
                        </tr>
                    </thead>

                    <tbody>
                    </tbody>
          </table>
        
        `;
    }
    update() {
        this.element.innerHTML = this.template();
    }
}
