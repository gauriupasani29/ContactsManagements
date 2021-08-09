using EHRepository.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace EHRepository.GenericRepository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private EFContactsDBContext _context = null;
        private DbSet<T> contacts = null;

        public GenericRepository()
        {
            this._context = new EFContactsDBContext();
            contacts = _context.Set<T>();
        }

        public void Add(T obj)
        {
            contacts.Add(obj);
        }

        public void Delete(int id)
        {
            T existing = contacts.Find(id);
            if (existing != null)
                contacts.Remove(existing);
        }

        public void Edit(T obj)
        {
            contacts.Attach(obj);
            _context.Entry(obj).State = EntityState.Modified;
        }

        public T GetById(object id)
        {
            return contacts.Find(id);
        }

        public IEnumerable<T> GetList()
        {
            return contacts.ToList();
        }

        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
