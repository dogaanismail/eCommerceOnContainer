﻿global using Autofac.Extensions.DependencyInjection;
global using Autofac;
global using Azure.Core;
global using Azure.Identity;
global using HealthChecks.UI.Client;
global using Microsoft.AspNetCore.Diagnostics.HealthChecks;
global using Microsoft.AspNetCore;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.EventBus.Abstractions;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.EventBus.Events;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.EventBus;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.EventBusRabbitMQ;
global using Microsoft.eCommerceOnContainers.BuildingBlocks.EventBusServiceBus;
global using Microsoft.eCommerceOnContainers.Payment.API.IntegrationEvents.Events;
global using Microsoft.Extensions.Diagnostics.HealthChecks;
global using Microsoft.Extensions.Options;
global using Microsoft.eCommerceOnContainers.Payment.API.IntegrationEvents.EventHandling;
global using Microsoft.eCommerceOnContainers.Payment.API;
global using RabbitMQ.Client;
global using Serilog.Context;
global using Serilog;
