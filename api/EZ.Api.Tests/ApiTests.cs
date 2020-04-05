using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Testing;
using Xunit;

namespace EZ.Api.Tests
{
    public class ApiTests: IClassFixture<WebApplicationFactory<Startup>>
    {
        private readonly WebApplicationFactory<Startup> _factory;

        public ApiTests(WebApplicationFactory<Startup> factory)
        {
            _factory = factory;
            System.Environment.SetEnvironmentVariable("TEST", "Hello World!");
        }

        [Fact]
        public async Task ApiRoot_GetRequest_ReturnsHelloWorld()
        {
            // Arrange
            using var client = _factory.CreateClient();
            var envVariableValue = Environment.GetEnvironmentVariable("TEST");

            // Act
            var response = await client.GetAsync("/");

            // Assert
            response.EnsureSuccessStatusCode();
            var responseText = await response.Content.ReadAsStringAsync();
            Assert.Equal(envVariableValue, responseText);
        }
    }
}
