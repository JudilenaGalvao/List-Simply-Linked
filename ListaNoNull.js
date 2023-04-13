import NoNull from "./NoNull";

class ListaNoNull{

    constructor(){
        this.primeiro = null;
    }

    //adiciona no inicio a lista.
    add(dado){
        let novo_no = new NoNull(dado);

        if(this.isEmpty()){ //Se a lista estiver vazia o novo nó será o primeiro nó da lista.
            this.primeiro = novo_no;

        }else{ // senão o proximo do novo nó aponta para o proximo do primeiro e o proximo do primeiro aponta para o novo nó.
            novo_no.proximo = this.primeiro.proximo;
            this.primeiro.proximo = novo_no;   

        }  
    }   
    
    //adiciona no final da lista.
    append(dado){
		let novo_no = new No(dado);

		if (this.isEmpty()) { //Se a lista estiver vazia o novo nó será o primeiro nó da lista.
			this.primeiro = novo_no;

		} else { //Senão percorra a lista a partir do primeiro nó até encontrar o último nó.
			let aux = this.primeiro;
			while (aux.proximo !== null) { 
				aux = aux.proximo;
			}
			aux.proximo = novo_no; //adiciona o novo nó como o sucessor do último nó.
		}
    }

    //Remove o primeiro da lista.
    removeFirst(){
        if (!this.isEmpty()){ // Se a lista não estiver vazia, aux aponta o proximo do primeiro e o proximo do primeiro aponta para o proximo do do aux.
            let aux = this.primeiro.proximo;
            this.primeiro.proximo = aux.proximo;
        }else throw new Error("Lista está vazia");
    }


    //Remove o final da lista.
    removeLast(){
        if (!this.isEmpty()){  //Se a lista não estiver vazia aux_a aponta pra o primeiro e aux_b aponta para o proximo do primeiro.
            let aux_a = this.primeiro;
            let aux_b = this.primeiro.proximo;
            while (aux_b.proximo !== null){ //Enqunto o proximo de aux_b não for igual a null, aux_a aponta pra aux_b e aux_b aponta para o proximo de aux_b.
                aux_a = aux_b;
                aux_b = aux_b.proximo;
            }
            aux_a.proximo = null;
        }else throw new Error("Lista está vazia");
    }


    // Diz se esta vazia.
    isEmpty(){
        return this.primeiro === null
    }


    //Retorna o tamanho da lista.
    size(){
        let aux = this.primeiro;
        let cont = 0;
        while (aux.proximo != null){ //Enquanto o proximo de aux for diferente de null, some 1 ao contador e aux aponta para o proximo.
            cont++;
            aux = aux.proximo;
        }
        return cont;
    }

    //Retorna a lista.
    asArray(){ 
        let aux = this.primeiro.proximo; 
        let dados = [];
        while (aux != null){ //Enquanto aux for diferente de null, pegue o dado de aux e coloque (push) dentro do vetor dados[].
            dados.push(aux.dado);
            aux = aux.proximo;
        }
        return dados;
    }

}

export default ListaNoNull;