 export class Serializable {
    fillFromJSON(json: Object) {
        for (var propName in json) {
        	if(this[propName] != null){
        		this[propName] = json[propName];
        	}
        }
    }
}