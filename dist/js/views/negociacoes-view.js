export class NegociacoesView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template(model) {
        return `
          <table class="table table-hover table-bordered">

                    <thead>
                        <tr>
                            <th>Data </th>
                            <th>Valor </th>
                            <th>Quantidade </th>
                        </tr>
                    </thead>
                       ${model.lista().map((item, index) => {
            return `
                            <tr>
                            <td>${new Intl.DateTimeFormat().format(item.data)}</td>
                            <td>${item.valor}</td>
                            <td>${item.quantidade} </td>
                             </tr>
                            `;
        }).join('')}

                    <tbody>
                    </tbody>
          </table>
        
        `;
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.element.innerHTML = template;
    }
}
