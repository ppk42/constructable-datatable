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
