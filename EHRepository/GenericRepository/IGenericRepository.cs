using System;
using System.Collections.Generic;
using System.Text;

namespace EHRepository.GenericRepository
{
    public interface IGenericRepository<T> where T : class
    {
        IEnumerable<T> GetList();
        T GetById(object id);
        void Add(T obj);
        void Edit(T obj);
        void Delete(int id);
        void Save();
    }
}
