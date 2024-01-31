/**
* A field is part of a record and defines a data element
* for this record. E.g. for a address record there are fields 
* for the family name and for the christioan name, for the 
* street, the zip code and for the town or village. 
* 
* A field is defined by a name and a data type. 
* @class
*/
class Field {
  constructor(name, _type) {
    this.name = name;
    this.type = _type;
  }
}
