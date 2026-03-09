class LinkedList {
    list = [];

    updatePointers() {
        for (let item of this.list) {
            if (this.list.indexOf(item) === this.list.length - 1) item.nextNode = null;
            else if (item.nextNode !== this.list.indexOf(item) + 1) item.nextNode = this.list.indexOf(item) + 1;
        }
    }
    
    append(value) {
        let newNode = new Node(value);
        this.list.push(newNode);
        this.updatePointers();
    }

    prepend(value) {
        let pointer = this.list[0].nextNode;
        let newNode = new Node(value, pointer);
        this.list.unshift(newNode);
        this.updatePointers();
    }

    size() {
        return this.list.length;
    }

    head() {
        if (!this.list.length) return undefined;
        return this.list[0];
    }

    tail() {
        if (!this.list.length) return undefined;
        return this.list[this.list.length - 1];
    }

    at(index) {
        if (!this.list[index]) return undefined;
        return this.list[index];
    }

    pop() {
        if (!this.list.length) return undefined;
        let removedNode = this.list.shift();
        this.updatePointers();
        return removedNode;
    }

    // contains(value) {
    //     let valueArr = [];
    //     for (let item of this.list) {
    //         valueArr.push(Object.values(item));
    //     }

    //     return valueArr.includes(value);
    // }

    contains(value) {
        for (let item of this.list) {
            if (item.value === value) return true;
        }

        return false;
    }

    findIndex(value) {
        for (let item of this.list) {
            if (item.value === value) return this.list.indexOf(item);
        }

        return -1;
    }

    toString() {
        let valueArr = [];
        for (let item of this.list) {
            valueArr.push(item.value);
        }

        let parenthesesArr = valueArr.map(value => `( ${value} )`);
        return parenthesesArr.join(' -> ') + ' -> null';
    }

    insertAt(index, ...values) {
        if (index < 0 || index >= this.list.length) throw new RangeError('Index is out of bounds. Index must be greater than equal to zero or less than the length of the linked list.');
        
        let newNodes = [];
        for (let value of values) {
            newNodes.push(new Node(value));
        }
        this.list.splice(index, 0, ...newNodes);
        this.updatePointers();
    }

    removeAt(index) {
        if (index < 0 || index >= this.list.length) throw new RangeError('Index is out of bounds. Index must be greater than equal to zero or less than the length of the linked list.');

        this.list.splice(index, 1);
        this.updatePointers();
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());