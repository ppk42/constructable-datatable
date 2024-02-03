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

/**
 * @class
 */
class Paginator {
  pageSize: number;
  totalSize: number;
  pageCount: number;
  activePage: number;

  constructor(pagesize: number) {
    this.pageSize = pagesize;
    this.totalSize = 0;
    this.pageCount = 0;
    this.activePage = -1;
  }
}

/**
 * @class
 */
class AbstractDataSource {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}

/**
 * @class
 */
class LocalDataSource extends AbstractDataSource {
  repository: object;
  constructor(id: string) {
    super(id);
    this.repository = {};
  }
}

/**
 * @class
 */
class RemoteDataSource extends AbstractDataSource {
  root_url: string;
  constructor(id: string, root_url: string) {
    super(id);
    this.root_url = root_url;
  }
}
