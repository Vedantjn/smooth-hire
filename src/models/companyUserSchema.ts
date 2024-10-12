import { MongoClient, Db } from 'mongodb';
import clientPromise from '@/lib/mongodb';

interface Company {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

interface Experience {
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  institutionName: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Application {
  name: string;
  email: string;
  phone: string;
  coverLetter: string;
  previousExperience: Experience[];
  education: Education[];
  availableStartDate: string;
  referral: string;
  jobId: string;
}

export async function getDatabase(): Promise<Db> {
  const client: MongoClient = await clientPromise;
  return client.db('smoothhire');
}

export async function createCollections() {
  const db = await getDatabase();

  await db.createCollection('companies', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['name', 'email', 'password', 'createdAt'],
        properties: {
          name: {
            bsonType: 'string',
            description: 'must be a string and is required'
          },
          email: {
            bsonType: 'string',
            description: 'must be a string and is required'
          },
          password: {
            bsonType: 'string',
            description: 'must be a string and is required'
          },
          createdAt: {
            bsonType: 'date',
            description: 'must be a date and is required'
          }
        }
      }
    }
  });


  await db.createCollection('applications', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        required: ['name', 'email', 'phone', 'coverLetter', 'availableStartDate', 'jobId'],
        properties: {
          name: {
            bsonType: 'string',
            description: 'must be a string and is required'
          },
          email: {
            bsonType: 'string',
            description: 'must be a string and is required'
          },
          phone: {
            bsonType: 'string',
            description: 'must be a string and is required'
          },
          coverLetter: {
            bsonType: 'string',
            description: 'must be a string and is required'
          },
          previousExperience: {
            bsonType: 'array',
            items: {
              bsonType: 'object',
              required: ['companyName', 'startDate', 'endDate', 'description'],
              properties: {
                companyName: { bsonType: 'string' },
                startDate: { bsonType: 'string' },
                endDate: { bsonType: 'string' },
                description: { bsonType: 'string' }
              }
            }
          },
          education: {
            bsonType: 'array',
            items: {
              bsonType: 'object',
              required: ['institutionName', 'startDate', 'endDate', 'description'],
              properties: {
                institutionName: { bsonType: 'string' },
                startDate: { bsonType: 'string' },
                endDate: { bsonType: 'string' },
                description: { bsonType: 'string' }
              }
            }
          },
          availableStartDate: {
            bsonType: 'string',
            description: 'must be a string and is required'
          },
          referral: {
            bsonType: 'string',
            description: 'must be a string'
          },
          jobId: {
            bsonType: 'string',
            description: 'must be a string and is required'
          }
        }
      }
    }
  });
}

export async function addCompany(company: Company) {
  const db = await getDatabase();
  const companiesCollection = db.collection('companies');
  await companiesCollection.insertOne(company);
}

export async function addApplication(application: Application) {
  const db = await getDatabase();
  const applicationsCollection = db.collection('applications');
  await applicationsCollection.insertOne(application);
}

createCollections().catch(console.error);
