import {Item} from './item';

describe('Item', () => {
  it('should create an instance', () => {
    expect(new Item()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Item({
      title: 'hello',
      status: 'complete'
    });
    expect(todo.title).toEqual('hello');
    expect(todo.status).toEqual('complete');
  });
});
