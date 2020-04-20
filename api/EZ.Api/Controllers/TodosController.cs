using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading;
using EZ.Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace EZ.Api.Controllers
{
    [Route("/todos")]
    public class TodosController : ControllerBase
    {
        private static int _counter = 0;
        private static ConcurrentDictionary<int, Todo> _todos = new ConcurrentDictionary<int, Todo>();

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_todos.Values);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Todo todo)
        {
            todo.Id = Interlocked.Increment(ref _counter);
            _todos.TryAdd(todo.Id, todo);
            return Created($"/todos/{todo.Id}", todo);
        }

        [HttpDelete("/{id}")]
        public IActionResult Delete(int id)
        {
            if (_todos.TryRemove(id,out var todo))
            {
                return NoContent();
            }

            return NotFound();
        }
    }
}