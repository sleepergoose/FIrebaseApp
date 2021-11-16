using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FIrebaseApp.Interfaces
{
    public interface IStorage<T> where T: class
    {
        public Task<List<T>> Get();
        public Task<T> GetBy(Func<T, bool> predicate);
        public Task<T> Create(T entity);
        public Task<T> Update(T entity);
        public Task<int> Delete(int id);
    }
}
