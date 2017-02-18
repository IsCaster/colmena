/* tslint:disable */

declare var Object: any;
export interface FileInterface {
  id?: string;
  name?: string;
  type?: string;
  created?: Date;
  modified?: Date;
  container?: string;
}

export class File implements FileInterface {
  id: string;
  name: string;
  type: string;
  created: Date;
  modified: Date;
  container: string;
  constructor(data?: FileInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `File`.
   */
  public static getModelName() {
    return "File";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of File for dynamic purposes.
  **/
  public static factory(data: FileInterface): File{
    return new File(data);
  }  
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'File',
      plural: 'Files',
      properties: {
        id: {
          name: 'id',
          type: 'string'
        },
        name: {
          name: 'name',
          type: 'string'
        },
        type: {
          name: 'type',
          type: 'string'
        },
        created: {
          name: 'created',
          type: 'Date'
        },
        modified: {
          name: 'modified',
          type: 'Date'
        },
        container: {
          name: 'container',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
