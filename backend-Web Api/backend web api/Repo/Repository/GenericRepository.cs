using Repo.Data;
using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repo.Repository
{
    public class GenericRepository<T>:IGenericRepository<T> where T : class
    {
        protected readonly ApplicationDbContext _context;
        public GenericRepository(ApplicationDbContext context) : base()
        {
            _context = context;
        }
        public void Add(T entity)
        {
            _context.Set<T>().Add(entity);
        }
        public void Delete(T entity) { _context.Set<T>().Remove(entity); }
        public T Get(Guid Id)
        {
            return _context.Set<T>().Find(Id);
        }
        public IEnumerable<T> GetAll()
        {
            return _context.Set<T>().ToList();
        }
        public IEnumerable<T> Find(Expression<Func<T, bool>> expression)
        {
            return _context.Set<T>().Where(expression);
        }
        public void Update(T entity) 
        {
            _context.Set<T>().AddOrUpdate(entity);
        }
    }
}
