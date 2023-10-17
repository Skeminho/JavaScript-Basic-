'use strict';

class StaffList {
    constructor() {
        this.staffMembers = new Map();
    }

    add(name, age) {
        if (age > 20) {
            if (!this.staffMembers.has(name)) {
                this.staffMembers.set(name, age);
            } else {
                throw "Staff member with the same name already exists";
            }
        } else {
            throw "Staff member age must be greater than 20";
        }
    }

    remove(name) {
        if (this.staffMembers.has(name)) {
            this.staffMembers.delete(name);
            return true;
        } else {
            return false;
        }
    }

    getSize() {
        return this.staffMembers.size;
    }
}

// Example usage
const obj = new StaffList();
const operationCount = parseInt(readLine().trim());

for(let i = 1; i <= operationCount; i++) {
    const operationInfo = readLine().trim().split(' ');
    try {
        let res;
        if (operationInfo[0] === 'add') {
            obj.add(operationInfo[1], parseInt(operationInfo[2]));
        } else if (operationInfo[0] === 'remove') {
            res = obj.remove(operationInfo[1]);
            ws.write(`${res}\n`);
        } else if (operationInfo[0] === 'getSize') {
            res = obj.getSize();
            ws.write(`${res}\n`);
        }
    } catch (e) {
        ws.write(`${e}\n`);
    }
}
ws.end();
