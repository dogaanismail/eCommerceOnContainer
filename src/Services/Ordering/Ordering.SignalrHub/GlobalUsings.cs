﻿global using Autofac.Extensions.DependencyInjection;
global using Autofac;
global using HealthChecks.UI.Client;
global using Microsoft.AspNetCore.Authentication.JwtBearer;
global using Microsoft.AspNetCore.Authorization;
global using Microsoft.AspNetCore.Builder;
global using Microsoft.AspNetCore.Diagnostics.HealthChecks;
global using Microsoft.AspNetCore.Hosting;
global using Microsoft.AspNetCore.SignalR;
global using Microsoft.AspNetCore;
global using Azure.Messaging.ServiceBus;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.EventBus.Abstractions;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.EventBus.Events;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.EventBus;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.EventBusRabbitMQ;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.EventBusServiceBus;
global using Microsoft.eCommerceOnContainers.Services.Ordering.SignalrHub.IntegrationEvents.Events;
global using Microsoft.eCommerceOnContainers.Services.Ordering.SignalrHub.IntegrationEvents;
global using Microsoft.Extensions.Configuration;
global using Microsoft.Extensions.DependencyInjection;
global using Microsoft.Extensions.Diagnostics.HealthChecks;
global using Microsoft.Extensions.Logging;
global using Microsoft.eCommerceOnContainers.Services.Ordering.SignalrHub.AutofacModules;
global using Microsoft.eCommerceOnContainers.Services.Ordering.SignalrHub.IntegrationEvents.EventHandling;
global using Microsoft.eCommerceOnContainers.Services.Ordering.SignalrHub.IntegrationEvents.Events;
global using Microsoft.eCommerceOnContainers.Services.Ordering.SignalrHub.IntegrationEvents;
global using Microsoft.eCommerceOnContainers.Services.Ordering.SignalrHub;
global using RabbitMQ.Client;
global using Serilog.Context;
global using Serilog;
global using System.IdentityModel.Tokens.Jwt;
global using System.IO;
global using System.Reflection;
global using System.Threading.Tasks;
global using System;
