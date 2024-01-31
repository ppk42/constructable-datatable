/**
* @class
*/
class DataCache {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

}

class DataPagination {
  constructor(page_size) {
    this.page_size = page_size;
    this.page_count = 0;
    this.active_page = -1;
  }
}

/**
* @class
*/  
class DataSource {
  constructor(name) {
    this.name = name;
  }
}

/**
* @class
*/  
class LocalDataSource extends DataSource{
  constructor(name, cached) {
    super(name);
    this.cached = cached;
    if (cached) {
      this.datacache = new DataCache(name)
    }
  }
}

/**
* @class
*/  
class RemoteDataSource extends DataSource{
  constructor(name, cached, root_url) {
    super(name);
    this.cached = cached;
    this.root_url = root_url;
    if (cached) {
      this.datacache = new DataCache(name)
    }
  }
}
