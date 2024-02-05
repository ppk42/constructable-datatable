/**
 * @class
 */
class AbstractDataCache {
  id: string;
  size: number
  constructor(id: string, size: number) {
    this.id = id;
    this.size = size;
  }
}

/**
 * @class
 */
class SimpleDataCache extends AbstractDataCache {
  constructor(id: string, size: number) {
    super(id, size);
  }
}

/**
 * @class
 */
class WebStorageDataCach extends AbstractDataCache {
  storageName: string;
  constructor(id: string, size: number, storageName: string) {
    super(id, size);
    this.storageName = storageName;
  }
}

