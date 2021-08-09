# ContactsManagements
 

The solution contains 4 projects as below:

1)ContactManagementReactApp 
This project contains AddContact (responsible for adding new contact), UpdateContact(responsible for updating the contact), ListContacts (display a list of contacts with delete, deactivate and update options) components inside "Components" folders.
2)EHContactmanagementAPI 
This project contains Rest APIs to add, update, delete, deactivate and list the contacts. Inside startup.cs dependency injection is used.
3)EHRepository 
This project has below folders a. Generic Repository: This folder contains Generic repository classes and interfaces. b. Contacts Repository: This folder contains Contacts repository classes and interfaces. c. Models: This folder has automatically generated classes using Entity framework and Db Context file. database first approach is used for generating the model classes. To use this, execute below script in SQL and update the connection string.
USE [EFContactsDB] GO

/****** Object: Table [dbo].[Contacts] Script Date: 10-08-2021 00:57:24 ******/ SET ANSI_NULLS ON GO

SET QUOTED_IDENTIFIER ON GO

CREATE TABLE [dbo].[Contacts]( [Id] [int] IDENTITY(1,1) NOT NULL, [FirstName] nvarchar NOT NULL, [LastName] nvarchar NOT NULL, [Email] nvarchar NOT NULL, [PhoneNumber] [bigint] NULL, [Status] nchar NULL, PRIMARY KEY CLUSTERED ( [Id] ASC )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY] ) ON [PRIMARY] GO

4)EHXUnitTests 
This project has Unit Test cases written for repository.
